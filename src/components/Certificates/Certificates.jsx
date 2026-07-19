import "./Certificates.css";
import certificates from "../../data/certificates";

function Certificates() {
  return (
<section
  id="certificates"
  className="certificates"
  data-aos="fade-up"
>
          <h2>Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <h3>{certificate.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;