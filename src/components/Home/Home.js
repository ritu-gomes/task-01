import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FruitStack from './FruitStack';
import './home.css';

const Home = () => {
    const { pass } = useParams();
    const [apple, setApple] = useState(10);
    const [orange, setOrange] = useState(10);
    const [grapes, setGrapes] = useState(10)
    const [fruitColor, setFruitColor] = useState(0);
    const [busketStack, setBusketStack] = useState([]);
    const addToBusket = (color) => {
        if (pass === "admin") {
            if (color === "primary") {
                setApple(apple - 1)
            }
            if (color === "secondary") {
                setOrange(orange - 1)
            }
            if (color === "warning") {
                setGrapes(grapes - 1)
            }
            setFruitColor(fruitColor + 1);
            busketStack.push(color);
        }
        else if (pass === "user") {
            alert("access = none")
        }
    }
    const emptyBusket = (color) => {
        if (pass === "admin" && busketStack[busketStack.length - 1] === color) {
            if (color === "primary") {
                setApple(apple + 1)
            }
            if (color === "secondary") {
                setOrange(orange + 1)
            }
            if (color === "warning") {
                setGrapes(grapes + 1)
            }
            busketStack.pop();
            setFruitColor(color);
        }
        else if (pass === "user") {
            alert("access = none")
        }
    }
    return (
        <div className="container home mt-3">
            <h2 className="text-center">All Fruits</h2>
            <div className="row d-flex justify-content-around align-items-center">

                <div className="col-3 text-center bg-primary">
                    <h4 className="mt-5">Apple</h4>
                    <div>{apple}</div>
                    <div className="row d-flex justify-content-around mt-3">
                        <div className="col-6">
                            <button onClick={() => addToBusket("primary")} className="btn btn-light">+</button>
                        </div>
                        <div className="col-6">
                            <button onClick={() => emptyBusket("primary")} className="btn btn-light">-</button>
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
                            <button onClick={() => emptyBusket("secondary")} className="btn btn-light">-</button>
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
                            <button onClick={() => emptyBusket("warning")} className="btn btn-light">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-center">busket Stack</h2>
            <div className="row d-flex justify-content-around mt-3">
                <div className="col-5 text-light bg-dark">
                    {
                        busketStack.map(col => <FruitStack color={col}></FruitStack>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;