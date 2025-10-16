import ComputadorContainer from "./computador/ComputadorContainer"
import "./services.css"

const service =[
  {
    id: 1,
    img: "/service1.png",
    title: "Desenvolvimento Web",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Design de Produto",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Branding",
    counter: 46,
  }
]

const Services = () => {
  return (
    <div className='services'>
      <div className="sSection left">
        <h1 className="sTitle">Como posso ajudar?</h1>
        <div className="serviceList">
          {service.map((service) => (
            <div className="section" key={service.id}>
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>

            </div>
          ))}

        </div>
      </div>
      <div className="sSection right">
        <ComputadorContainer/>
      </div>
    </div>
  )
}

export default Services