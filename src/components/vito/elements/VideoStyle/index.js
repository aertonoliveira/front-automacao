/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const index = (props) => {
    return (
        <>
            <div className={props.class}>
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        allowFullScreen />
            </div>
        </>
    );
};

export default index;
