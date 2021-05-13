import React, { Component } from 'react'

class Lista extends Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
                analista: '',
                fecha: '',
                detalle: '',
                importe: 0
        }
    }


    componentDidMount(){


    }

    add = (e) =>{
        e.preventDefault();
        const values ={
            analista: this.state.analista,
            fecha: this.state.fecha,
            detalle: this.state.detalle,
            importe: Math.round(this.state.importe)
        }

        this.setState({ array: [...this.state.array,values] });

        this.setState({ analista: '', fecha:'',detalle: '',importe:'' });


    }


    redondar = () =>{
        
    }




    render() {
        return (
            <div className="container mx-auto w-2/4 my-10">
                <form className="flex flex-col mx-auto w-3/5" onSubmit={this.add}>
                    <label htmlFor="">Analista Comercial</label>
                    <input type="text" name="analista" value={this.state.analista} onChange={ (e) => {this.setState({  analista : e.target.value })} } className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
                    <label htmlFor="">Fecha</label>
                    <input type="text" name="fecha" value={this.state.fecha}  onChange={ (e) => {this.setState({  fecha : e.target.value })}} className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
                    <label htmlFor="">Detalle</label>
                    <input type="text" name="detalle" value={this.state.detalle} onChange={ (e) => {this.setState({  detalle : e.target.value })} } className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
                    <label htmlFor="">Importe</label>
                    <input type="number" step="any"  name="importe" value={this.state.importe} 
                 onChange={ (e) => {this.setState({  importe : e.target.value })} } className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>

                    <div className="flex justify-center flex-wrap"> 
                         <button type="submit" className="border border-gray-900 p-2 m-4 w-2/12">Enviar</button>

                    </div>


                </form>

                <table class="table-fixed border border-black">
                    <thead>
                        <tr>
                        <th className="w-1/4 text-center">Analista Comercial</th>
                        <th className="w-1/2">Fecha</th>
                        <th className="w-1/2">Detalle</th>
                        <th className="w-1/2">Importe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.array.map((value,key) =>{
                                return(
                                    
                                    <>
                                    <tr key={key}>
                                        <td className="text-center">{value.analista}</td>
                                        <td className="text-center">{value.fecha}</td>
                                        <td className="text-center">{value.detalle}</td>
                                        <td className="text-center">{value.importe}</td>
                                    </tr>





                                    </>

                                )


                            })}

 
                    </tbody>
                </table>  
            </div>
        )
    }
}

export default Lista;
