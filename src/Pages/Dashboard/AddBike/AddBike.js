
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddBike = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    /** image upload in imgbb **/

    const handleAddBike = data => {
       const image = data.image[0];
       const formData = new FormData();
       formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
       fetch(url, {
        method: 'POST',
        body: formData
       })
       .then(res => res.json())
       .then(imgData =>{
        // console.log(imgData);
        if(imgData.success){
            console.log(imgData.data.url);
            const bikeDatas = {
                code: data.code,
                name: data.name,
                description: data.description,
                price: data.price,
                categoriy: data.categoriy,
                image: imgData.data.url
            }

            // save product data information to the database
            fetch('http://localhost:5000/bikeDatas', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(bikeDatas)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
                toast.success(`${data.name} is added successfully`)
                navigate('/dashboard/manageproduct')
            })
        }
       })
    }

    return (
        <div className='mt-5 w-96 p-7 text-center'>
            <h2 className='text-3xl'>Add A Bike</h2>
            <form onSubmit={handleSubmit(handleAddBike)}>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Code</span> </label>
                    <input type="text"
                        {...register("code", {
                            required: "Code is Required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.code && <p className='text-error'>{errors.code?.message}</p>}
                </div>
                <div>
                    <label className="label"><span className="label-text">Name</span> </label>
                    <input type="text"
                        {...register("name", {
                            required: "Name is Required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Description</span> </label>
                    <input type="text"
                        {...register("description", {
                            required: "Description is Required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.description && <p className='text-error'>{errors.description?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Resale Price</span> </label>
                    <input type="text"
                        {...register("resale_price", {
                            required: "Resale Price is Required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.resale_price && <p className='text-error'>{errors.resale_price?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Orginial Price</span> </label>
                    <input type="text"
                        {...register("orginial_price", {
                            required: "Orginial Price is Required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.orginial_price && <p className='text-error'>{errors.orginial_price?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Years of Use</span> </label>
                    <input type="text"
                        {...register("years_of_use", {
                            required: "Years of Use is Required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.years_of_use && <p className='text-error'>{errors.years_of_use?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Categoriy</span> </label>
                    <select 
                      {...register("categoriy", {
                        required: "Select a Categoriy"
                    })}
                    className="select select-bordered w-full max-w-xs">
                        <option>Motorcycle</option>
                        <option>Scooter</option>
                        <option>Shiny</option>
                    </select>
                    {errors.categoriy && <p className='text-error'>{errors.categoriy?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Image</span> </label>
                    <input type="file"
                        {...register("image", {
                            required: "Photo is Required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.image && <p className='text-error'>{errors.image?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text"></span></label>
                </div>
                <input type="submit" value="Add Bike" className='btn btn-accent text-white w-full mt-2' />
            </form>
        </div>
    );
};

export default AddBike;