import React, {useState} from 'react';

const ColorForm = () => {

    const [formInfo, setFormInfo] = useState({
        color:""
    })

    const [listOfColors, setListOfColors]=useState([])

    const addColor=(e)=>{
        console.log("you are changing input", e.target.name, e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const addColorList=(e)=>{
        e.preventDefault();
        console.log("submitted form")
        console.log(formInfo)
        setListOfColors([...listOfColors,formInfo])
    }

    return (
        <div>
            <form onSubmit={addColorList}> 
                <div className="form-group">
                    <label htmlFor="">Color:</label>
                    <input onChange={(e)=>addColor(e)} type="text" name="color" id="" className="form-control"/>
                </div>
                <div>
                    <input type="submit" value="ADD" className="btn btn-success mt-3" />
                </div>
            </form>
            {
                listOfColors.map(color=>{
                return <div style={{backgroundColor: color.color}} className="card">
                            <div class="card-body">
                                <h4 class="card-title">{color.color}</h4>
                            </div>
                        </div>
                })
            }
        </div>
    );
};

export default ColorForm;