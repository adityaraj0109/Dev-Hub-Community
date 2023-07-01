import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { TagsInput } from 'react-tag-input-component'
import './css/Question.css'

function AddQuestion() {
  return (
    <div className='add-ques'>
        <div className='add-ques-container'>
            <div className='head-title'>
                <h1>Ask a Public Question</h1>
            </div>
            <div className='ques-container'>
                <div className='ques-options'>
                    <div className='ques-option'>
                        <div className='title'>
                            <h3>Title</h3>
                            <small>Be specific and imagine you're asking a question to another person.</small>
                            <input type='text' placeholder='Add Question Title here....'/>
                        </div>
                    </div>
                    <div className='ques-option'>
                        <div className='title'>
                            <h3>Body</h3>
                            <small>Include all the information someone would need to answer your question.</small>
                            <ReactQuill className='react-quill' theme='snow'/>
                        </div>
                    </div>
                    <div className='ques-option'>
                        <div className='title'>
                            <h3>Tags</h3>
                            <small>Add up to 5 tags to describe what is question is about. </small>
                            <div className='input-tag'>
                                <TagsInput
                                name='tags'
                                placeHolder="press enter to add new tag"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='button'>Add your question</button>
        </div>
    </div>
  )
}

export default AddQuestion