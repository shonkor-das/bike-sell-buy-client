import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageProducts = () => {

    const [deletingBikeData, setDeletingBikeData] = useState(null);

    const closeModal = () =>{
        setDeletingBikeData(null);
    }

    const { data: bikeDatas, refetch } = useQuery({
        queryKey: ['bikeDatas'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/bikeDatas', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDelete = deletingBikeData =>{
        fetch(`http://localhost:5000/bikeDatas/${deletingBikeData._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Bike ${deletingBikeData.name} Delete successfully`)
            }
            console.log(data);
            
        })
    }

    return (
        <div className='mt-5'>
            <h2 className='text-3xl mb-4'>Manage Products: {bikeDatas?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Avatar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikeDatas &&
                            bikeDatas.map((bikeData, i) => <tr key={bikeData._id}>
                                <th>{i + 1}</th>
                                <td>{bikeData.code}</td>
                                <td>{bikeData.name}</td>
                                <td>{bikeData.description}</td>
                                <td>{bikeData.price}</td>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={bikeData.image} alt="" />
                                    </div>
                                </div></td>
                                <td>
                                    <label onClick={() => setDeletingBikeData(bikeData)} htmlFor="confirmation-modal" className="btn btn-error btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBikeData && <ConfirmationModal
                title={`Are you sure want to delete?`}
                message={`If you delete ${deletingBikeData.name}. It cannot be undone`}
                successAction= {handleDelete}
                successButtonName = "Delete"
                modalData= {deletingBikeData}
                closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;