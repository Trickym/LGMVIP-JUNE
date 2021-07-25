import React from 'react';


export const Cards = ({users}) => {
    return (
        <div>
            {
                users.map((user)=>{
                    const {avatar,first_name,last_name,email} = user;
                    return (
                        <div key={user.id} className="my-3 wdt">
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img alt="img" src={ avatar } className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                    <h2>{first_name} {last_name}</h2>
                                    <h3>{email}</h3>
                                    </div>
                             </div>
                          </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Cards;
