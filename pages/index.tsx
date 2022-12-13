import Logo from "../components/Layout/Subcomponents/Logo";

export default function Home() {
  return (
    <div className="bg-home">
      <section className="greeting">
        <h1>Welcome to</h1>
        <div className="logo">
          <Logo size={"4.5rem"} />
        </div>
        <p>
          Are you ready to discover our incredible menu? <br />
          For any enquiries, please use our contact form
        </p>
      </section>
    </div>
  );
}
