import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './home.css';

const Home = () => {
    const {pass} = useParams();
    console.log(pass);
    const [apple, setApple] = useState(10);
    const [orange, setOrange] = useState(10);
    const [grapes, setGrapes] = useState(10)
    const [fruitColor,setFruitColor] = useState('');
    const busketStack = [];
    const addToBusket = (color) => {
        if(pass === "admin"){
            if(color === "primary"){
                setApple(apple-1)
            }
            if(color === "secondary"){
                setOrange(orange-1)
            }
            if(color === "warning"){
                setGrapes(grapes-1)
            }
            setFruitColor(color);
            busketStack.push(color);
        }
        else if(pass === "user"){
            alert("access = none")
        }
    }
    return (
        <div className="container home mt-3">
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col-3 text-center bg-primary">
                    <h4 className="mt-5">Apple</h4>
                    <div>{apple}</div>
                    <div className="row d-flex justify-content-around mt-3">
                        <div className="col-6">
                            <button onClick={() => addToBusket("primary")} className="btn btn-light">+</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-light">-</button>
                        </div>
                    </div>

                </div>
                <div className="col-3 text-center bg-secondary">
                    <h4 className="mt-5">Orange</h4>
                    <div>{orange}</div>
                    <div className="row d-flex justify-content-around mt-3">
                        <div className="col-6">
                            <button onClick={() => addToBusket("secondary")} className="btn btn-light">+</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-light">-</button>
                        </div>
                    </div>
                </div>
                <div className="col-3 text-center bg-warning">
                    <h4 className="mt-5">Grapes</h4>
                    <div>{grapes}</div>
                    <div className="row d-flex justify-content-around mt-3">
                        <div className="col-6">
                            <button onClick={() => addToBusket("warning")} className="btn btn-light">+</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-light">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-around mt-3">
                <div className="col-5 text-light bg-dark">
                    <div className={`busket p-2 bg-${fruitColor}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;