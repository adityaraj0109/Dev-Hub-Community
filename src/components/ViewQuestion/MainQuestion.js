import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import './css/index.css';

function MainQuestion() {
    const [show, setShow] = useState(false);
    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2 className='main-ques'>This is the ques title</h2>
                    <Link to='/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-desc'>
                    <div className='info'>
                        <p>Timestamp</p>
                        <p>Active <span>today</span></p>
                        <p>Viewed <span>43 times</span></p>
                    </div>
                </div>
                <div style={{
                    borderBottom: "1px solid #eee",
                    marginBottom: "10px"
                }} className='all-ques'>
                    <div className='all-ques-container'>
                        <div className='all-ques-left'>
                            <div className='all-options'>
                                <p className="arrow">▲</p>
                                <p className="arrow">0</p>
                                <p className="arrow">▼</p>
                            </div>
                        </div>
                        <div className='ques-ans'>
                            <p>This is ques body</p>
                            <div className='author'>
                                <small>asked "Timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author Name</p>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className='comment'>
                                    <p>This is comment - <span>User Name</span><small>Time stamp</small></p>
                                </div>
                                <p style={{ margin: "10px 0px 10px 0px" }} onClick={() => setShow(!show)}>Add a comment</p>
                                {
                                    show && (<div className='title'>
                                        <textarea placeholder='Add your comment....' rows={5} style={{
                                            margin: "5px 0px",
                                            padding: "10px",
                                            border: "1px solid rgba(0,0,0,0.2)",
                                            borderRadius: "3px",
                                            outline: "none"
                                        }}></textarea>
                                        <button style={{
                                            maxWidth: "fit-content"
                                        }}>Add comment</button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='all-ques' style={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: "1px solid #eee",
                    marginBottom: "10px"
                }}>
                    <p style={{
                        marginBottom: "20px",
                        fontSize: "1.3rem",
                        fontWeight: "300"
                    }}>No. of answers</p>
                    <div className='all-ques-container'>
                        <div className='all-ques-left'>
                            <div className='all-options'>
                                <p className="arrow">▲</p>
                                <p className="arrow">0</p>
                                <p className="arrow">▼</p>
                            </div>
                        </div>
                        <div style={{ marginBottom: "10px" }} className='ques-ans'>
                            <p>This is ques body</p>
                            <div className='author'>
                                <small>asked "Timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-ans'>
                <h3 style={{
                    fontSize: "22px",
                    fontWeight: "400",
                    margin:"10px 0px"
                }}>Your Answer</h3>
                <ReactQuill className='react-quill' theme='snow' style={{
                    height
                        : '200px'
                }} />
            </div>
            <button style={{
                maxWidth:"fit-content",
                marginTop:"40px"
            }}>Post Your Answer</button>
        </div>
    )
}

export default MainQuestion