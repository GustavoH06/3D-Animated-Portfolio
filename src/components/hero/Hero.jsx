import "./hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">

        {/* Título */}
        <h1 className="hTitle">
          Olá a Todos,
          <br/>
          <span>Eu Sou João</span>
        </h1>

        {/* Prêmios */}
        <div className="awards">
          <h2>Desenvolvedor bem avaliado</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="awardList">
          <img src="/award1.png" alt="" />
          <img src="/award2.png" alt="" />
          <img src="/award3.png" alt="" />
        </div>

        {/*Scroll SVG*/}
        <a href="#services">
          
        </a>

      </div>

      <div className="hSection right">

      </div>
      
    </div>
  )
}

export default Hero