import React from "react";
import { Field, Form, Formik } from 'formik';
import JoditEditor from "jodit-react";
import axios from "axios";
import toast from 'react-hot-toast';

const FeaturesForm = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Feature</h2>
      <Formik initialValues={{ title: '', description: '', image: '' }}
        onSubmit={(values) => {
          try {
            const formData = new FormData();
            axios.post('', formData).then((res) => {
              console.log(res);
              toast.success('Feature added successfully');
            }).catch(err => {
              console.log(err);
            });
          } catch (error) {
            console.log(error);
          }
        }}>
        {({ setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <Field
                type="text"
                name="title"
                placeholder="Enter feature title"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Description</label>
              <JoditEditor />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Upload Icon</label>
              <input onChange={(e) => setFieldValue('image', e.target.files[0])}
                type="file"
                accept="image/*"
                className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
              />
            </div>
            <div className="text-left">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
                Save Changes
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeaturesForm;
