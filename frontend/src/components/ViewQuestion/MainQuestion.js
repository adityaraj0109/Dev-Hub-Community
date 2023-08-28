import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import './css/index.css';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function MainQuestion() {
    const [show, setShow] = useState(false);
    const [questionData, setQuestionData] = useState();
    const [answer, setAnswer] = useState("");
    const [comment, setComment] = useState("");

    const user = useSelector(selectUser);

    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("q");

    const handleQuill = (value) => {
        setAnswer(value);
    };

    useEffect(() => {
        async function getFunctionDetails() {
          await axios.get(`/api/question/${id}`)
            .then((res) => setQuestionData(res.data[0]))
            .catch((err) => console.log(err));
        }
        getFunctionDetails();
    }, [id]);

    async function getUpdatedAnswer() {
        await axios
          .get(`/api/question/${id}`)
          .then((res) => setQuestionData(res.data[0]))
          .catch((err) => console.log(err));
    }

    const handleSubmit = async () => {
        if(answer!==""){
            const body = {
                question_id: id,
                answer: answer,
                user: user,
            };

            const config = {
                headers: {
                "Content-Type": "application/json",
                },
            };

            await axios
            .post("/api/answer", body, config)
            .then(() => {
              alert("Answer added successfully");
              setAnswer("");
              getUpdatedAnswer();
            })
            .catch((err) => console.log(err));
        }
    };

    const handleComment = async () => {
        if (comment !== "") {
          const body = {
            question_id: id,
            comment: comment,
            user: user,
          };
          await axios.post(`/api/comment/${id}`, body).then((res) => {
            setComment("");
            setShow(false);
            getUpdatedAnswer();
          });
        }
    };

    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2 className='main-ques'>{questionData?.title}</h2>
                    <Link to='/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-desc'>
                    <div className='info'>
                        <p>{new Date(questionData?.created_at).toLocaleString()}</p>
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
                            <p>{ReactHtmlParser(questionData?.body)}</p>
                            <div className='author'>
                                <small>asked {new Date(questionData?.created_at).toLocaleString()}</small>
                                <div className='auth-details'>
                                    <Avatar src={questionData?.user?.photo} />
                                    <p>{questionData?.user?.displayName
                            ? questionData?.user?.displayName
                            : String(questionData?.user?.email).split('@')[0]}</p>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className="comment">
                                    {questionData?.comments &&
                                    questionData?.comments.map((_qd) => (
                                    <p key={_qd?._id}>
                                        {_qd.comment}{" "}
                                        <span>
                                        - {_qd?.user?.displayName?_qd?.user?.displayName : String(_qd?.user?.email).split('@')[0]}
                                        </span>{" "}
                                        {"    "}
                                        <small>
                                        {new Date(_qd.created_at).toLocaleString()}
                                        </small>
                                    </p>
                                    ))}
                                </div>
                                <p style={{ margin: "10px 0px 10px 0px" }} onClick={() => setShow(!show)}>Add a comment</p>
                                {
                                    show && (<div className='title'>
                                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Add your comment....' rows={5} style={{
                                            margin: "5px 0px",
                                            padding: "10px",
                                            border: "1px solid rgba(0,0,0,0.2)",
                                            borderRadius: "3px",
                                            outline: "none"
                                        }}></textarea>
                                        <button onClick={handleComment} style={{
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
                    }}>{questionData && questionData?.answerDetails.length} Answers</p>
                    {questionData?.answerDetails.map((_q) => (
                    <>
                    <div style={{borderBottom: "1px solid #eee",
                }} key={_q._id} className='all-ques-container'>
                        <div className='all-ques-left'>
                            <div className='all-options'>
                                <p className="arrow">▲</p>
                                <p className="arrow">0</p>
                                <p className="arrow">▼</p>
                            </div>
                        </div>
                        <div style={{ marginBottom: "10px" }} className='ques-ans'>
                            <p>{ReactHtmlParser(_q.answer)}</p>
                            <div className='author'>
                                <small>asked {new Date(_q.created_at).toLocaleString()}</small>
                                <div className='auth-details'>
                                <Avatar src={_q?.user?.photo} />
                                    <p>{_q?.user?.displayName
                            ? _q?.user?.displayName
                            : String(_q?.user?.email).split('@')[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>))}
                </div>
            </div>
            <div className='main-ans'>
                <h3 style={{
                    fontSize: "22px",
                    fontWeight: "400",
                    margin:"10px 0px"
                }}>Your Answer</h3>
                <ReactQuill value={answer} onChange={handleQuill}className='react-quill' theme='snow' style={{
                    height
                        : '200px'
                }} />
            </div>
            <button type="submit" onClick={handleSubmit} style={{
                maxWidth:"fit-content",
                marginTop:"40px"
            }}>Post Your Answer</button>
        </div>
    )
}

export default MainQuestion