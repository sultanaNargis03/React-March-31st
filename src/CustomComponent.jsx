import "./CustomComponent.css";

const person = {
  name: "Nargis",
  skills: "Java,JS,HTML,CSS,React",
  profileImage:
    "https://envato-shoebox-0.imgix.net/c9b4/53ff-21a8-490b-8ef3-7d87aa2a1136/PPB34bdkURQUdfSBRBqoXxmGXai7GULtlOcI6WA2.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=e712dd5ac08905863af2cfa6a3ddff43",
  profileImageHeight: 100,
  profileImageWidth: 100,
};

function CustomComponent() {
  return (
    <div className="container">
      <h1>Our Custom Component</h1>
      <hr />
      <img
        src={person.profileImage}
        style={{
          height: person.profileImageHeight,
          width: person.profileImageWidth,
        }}
        alt="Profile pic of the person"
      />

      <p>
        hey {person.name}, we are buliding custom component.
        <br />
        We know you are skilled on:{person.skills}
      </p>
    </div>
  );
}
export default CustomComponent;
