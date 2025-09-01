export default function OurTeam() {
  const teamMembers = [
    { id: 1, name: "ayonga wilda", position: "Avocat Associé", image: "/assets/img/team/avatar4.jpg" },
    { id: 2, name: "ayonga wilda", position: "Expert Juridique", image: "/assets/img/team/avatar6.jpg" },
    { id: 3, name: "ayonga wilda", position: "Spécialiste Fiscal", image: "/assets/img/team/avatar5.jpg" },
    { id: 4, name: "ayonga wilda", position: "Consultant Corporate", image: "/assets/img/team/avatar3.jpg" },
    { id: 5, name: "ayonga wilda", position: "Avocat Senior", image: "/assets/img/team/avatar1.jpg" },
    { id: 6, name: "ayonga wilda", position: "Directeur Juridique", image: "/assets/img/team/avatar2.jpg" }
  ];

  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8 col-xl-6 text-center mx-auto">
            <h3 className="fs-1 fw-bold mb-3 heading">Notre Équipe</h3>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="col text-center">
                  <div className="team-img-wrapper mb-3 mx-auto">
                    <img 
                      className="rounded-circle object-fit-cover team-avatar" 
                      width="120" 
                      height="120" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <h6 className="fw-bold mb-1 text-dark">{member.name}</h6>
                  <p className="text-muted small mb-0">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}