import React from 'react';

const Blog = () => {
    return (
        <div className='flex gap-6 justify-center mt-10 text-justify mx-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold">What are the different ways to manage a state in a React application?</h2>
                    <p><span className='text-lg'>Answer: </span>When we have to pass data from one component to another then it can be done easily, but if we want to pass our data in nested states then it becomes complicated which is called prop drilling i.e. passing the data as props from parent component to child component.</p>
                </div>
            </div>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className="card-body">
                    <h2 className="font-bold">How does prototypical inheritance work?</h2>
                    <p><span className='text-lg'>Answer: </span>In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage. All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold">What is a unit test? Why should we write unit test?</h2>
                    <p><span className='text-lg'>Answer: </span>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.<br />
                        Unit tests are usually written in the form of functions and check the value and behavior of these functions in various scenarios. For example, let’s imagine a function for the division of two numbers: the developer decides to follow the TDD approach, first writing a test with the input of values ‘4’ and ‘2’ (4 divided by 2) with ‘2’ expected as the result.
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold">React vs. Angular vs. Vue?</h2>
                    <span className='text-lg'>Answer: </span>
                    <ul>
                        <li>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.</li>
                        <li>React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.</li>
                        <li>The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.</li>
                        <li>AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;