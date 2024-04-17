import React from 'react';

const courses = [
    {
        title: 'Crash Course on React',
        description: 'Learn from Beginner to Advanced level in React.',
        image: '/assets/courses/react.jpeg',
        price: '$19.99'
    },
    {
        title: 'Angular Course',
        description: 'Learn from Beginner to Advanced level in Angular.',
        image: '/assets/courses/angular.webp',
        price: '$29.99'
    },
    {
        title: 'Complete Vue Course',
        description: 'Learn from Beginner to Advanced level in Vue.',
        image: '/assets/courses/vue.jpg',
        price: '$39.99'
    }
];

export default function Courses() {
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto max-w-8xl px-4">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img className="w-full h-1/2 object-cover" src={course.image} alt={course.title} />
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-2">{course.description}</p>
                            <p className="text-gray-900 font-semibold">{course.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
