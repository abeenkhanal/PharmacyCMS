import React, { useState } from 'react'
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

const RevolutionizeForm = () => {

  const [imagePreview, setimagePreview] = useState(null);
  const [imageLoading, setimageLoading] = useState(false);

  const revolunizechangeImage = async (e, b) => {
    try {
      setimagePreview(null)
      setimageLoading(true)
      const formData = new FormData();
      formData.append("image", e);
      await axios.post('/fileupload', formData).then((res) => {
        console.log("res", res);
        b('image', res.data.id);
        setimageLoading(false)

      }).catch((err) => {
        setimageLoading(false)
        console.log("error", err);
      })
    } catch (error) {
      setimageLoading(false)
      console.log("error", error);
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Feature</h2>
      <Formik initialValues={{
        title: "",
        description: "",
        image: "",
      }} onSubmit={(values) => {
        console.log(values);
        try {
          axios.post('/revolutionizesection', values).then((res) => {
            console.log("res", res);
          }).catch((err) => {
            console.log("error", err);
          });
        } catch (error) {
          console.log("error", error);
        }
      }}>
        {({ handelSubmit, values, setFieldValue }) => {
          return (
            <Form onSubmit={handelSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">Title</label>
                <Field
                  type="text"
                  name="title"
                  placeholder="Enter feature title"
                  className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Description</label>
                <JoditEditor onChange={(e) => {
                  setFieldValue('description', e)
                }} value={values.description} />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Upload Icon</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    revolunizechangeImage(e.target.files[0], setFieldValue);

                  }}
                  className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200" />
                <label htmlFor="imageupload">
                  {imagePreview ? (
                    <div className="mt-4">
                      <img src={imagePreview} alt="Preview" className="w-48 object-contain h-24 rounded-lg" />
                    </div>
                  ) : imageLoading == true ? <div>loading..........</div> : <div className="w-48 h-24 bg-gray-100">
                    fs
                  </div>}
                </label>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
                  Save Changes
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>

    </div>
  )
};
export default RevolutionizeForm;
