import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/Question.css'
import ReactHtmlParser from "react-html-parser";

function Question({ data }) {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    console.log(data?._id)
    console.log(data)

    return (
        <div className='all-questions'>
            <div className='all-ques-container'>
                <div className='all-ques-left'>
                    <div className='all-options'>
                        <div className='all-option'>
                            <p>0</p>
                            <span>votes</span>
                        </div>
                        <div className='all-option'>
                            <p>{data?.answerDetails?.length}</p>
                            <span>answers</span>
                        </div>
                        <div className='all-option'>
                            <small>0 views</small>
                        </div>
                    </div>
                </div>
                <div className='ques-ans'>
                    <Link to={`/question?q=${data?._id}`}>{data?.title}</Link>
                    <div style={{ width: "90%" }}>
                        <div>
                            {ReactHtmlParser(truncate(data.body, 200))}
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        {data.tags.map((_tag) => (
                        <p
                            style={{
                            margin: "10px 5px",
                            padding: "5px 10px",
                            backgroundColor: "#007cd446",
                            borderRadius: "3px",
                            }}
                        >
                            {_tag}
                        </p>
                        ))}
                    </div>
                    <div className='author'>
                        <small>{new Date(data?.created_at).toLocaleString()}</small>
                        <div className='author-details'>
                            <Avatar src={data?.user?.photo} />
                            <p>{data?.user?.displayName
                            ? data?.user?.displayName
                            : String(data?.user?.email).split('@')[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question