import { Form, Formik } from 'formik';
import JoditEditor from 'jodit-react';
import React, { useState } from 'react'

function HeroForm() {

  const [imagePrev, setimagePrev] = useState(null);
  const [imageloading, setimageloading] = useState(false);

  const Heropost = async (e, b) => {
    try {
      setimagePrev(null)
      setimageloading(true)
      const formData = new FormData();
      formData.append('image', e)
      await axios.post('/fileupload', formData).then((res) => {
        console.log("res", res);
        b('image', res.data.id)
        setimagePrev(res.data.image);
        setimageloading(false)
        // return res.data.ids
      }).catch((err) => {
        setimageloading(falsse)
        console.log("error", err);
      })
    } catch (error) {
      setimageloading(false)
      console.log("error", error);
    }
  }


  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
      <Formik initialValues={{
        title: "",
        description: "",
        image: "",
      }}
        onSubmit={(values) => {
          console.log(values);
          try {
            axios.post('/herosection', values).then((res) => {
              console.log("res", res);
              // b('image',res.data.id)
              // return res.data.ids
            }).catch((err) => {
              console.log("error", err);
            })
          } catch (error) {
            console.log("error", error);
          }
        }}
        className="space-y-6">
        {({ handleSubmit, values, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Title</label>
                <input
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
              <div>
                <label className="block text-gray-600 font-medium mb-1">Image</label>
                <input
                  id='imageupload'
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    Heropost(e.target.files[0], setFieldValue)
                  }}
                  className="hidden text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
                />
                <label htmlFor="imageupload">
                  {
                    imagePrev ? (
                      <div className="mt-4">
                        <img src={imagePrev} alt="Preview" className="w-48 object-contain h-24 rounded-lg" />
                      </div>

                    ) : imageloading == true ? <div>loading.....</div> : <div className='border w-48 h-24 bg-gray-300'>hero</div>
                  }
                </label>
              </div>
              <div className="text-left">
                <button
                  type="button"
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

export default HeroForm

