import JoditEditor from 'jodit-react'
import React from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const BannerForm = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          try {
            axios.post('http://192.168.1.128:3001/banner-section', values).then((res) => {
              console.log("res", res);
            }
            ).catch((err) => {
              console.log("error", err);
            })
          } catch (error) {
            console.log("error", error);
          }
        }}>
        {({ handleSubmit, values, setFieldValue }) => {
          return (
            <Form className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">Title</label>
                <Field
                  type="text"
                  name="title"
                  placeholder="Enter your title"
                  className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Description</label>
                <JoditEditor onChange={(e) => {
                  setFieldValue('description', e)
                }} value={values.description} />
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                  Save Changes
                </button>
              </div>
            </Form>
          )
        }}

      </Formik>
    </div>
  )
}

export default BannerForm
