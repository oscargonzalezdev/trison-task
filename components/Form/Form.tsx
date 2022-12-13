import styles from "./Form.module.css";

function Form() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = form.elements.namedItem("firstName") as HTMLInputElement;
    const lastName = form.elements.namedItem("lastName") as HTMLInputElement;
    const company = form.elements.namedItem("company") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const enquiry = form.elements.namedItem("enquiry") as HTMLInputElement;

    // form validation
    if (firstName.value === "" || !firstName.value.match(firstName.pattern)) {
      alert("Please enter a valid first name. \n This input is required and only accepts letters and spaces.");
    } else if (lastName.value === "" || !lastName.value.match(lastName.pattern)) {
      alert("Please enter a valid last name. \n This input is required and only accepts letters and spaces.");
    } else if (company.value === "") {
      alert("Please enter your company name. \n This input is required.");
    } else if (email.value === "" || !email.value.match(email.pattern)) {
      alert("Please enter a valid email. \n This input is required.");
    } else if (enquiry.value === "") {
      alert("Please enter your enquiry. \n This input is required.");
    } else if (!form.checkValidity()) {
      alert("Form has invalid inputs. Please try again");
    } else {
      alert("Form submited successfully!");
    }
  };

  return (
    <div className={styles.bgForm}>
      <div className={styles.formContainer}>
        <h1>Get in touch!</h1>
        <form className={styles.form} id="form" onSubmit={handleFormSubmit}>
          <div className={styles.twoColumns}>
            <label>
              <span className={styles.req}>First Name *</span>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                pattern="[a-zA-Z\s]+"
                title="Please enter your first name using only letters and spaces"
                minLength={2}
                maxLength={20}
              />
            </label>
            <label>
              <span className={styles.req}>Last Name *</span>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                pattern="[a-zA-Z\s]+"
                title="Please enter your last name using only letters and spaces"
                minLength={2}
                maxLength={20}
              />
            </label>
          </div>
          <div className={styles.twoColumns}>
            <label>
              <span className={styles.req}>Company *</span>
              <input
                type="text"
                id="company"
                name="company"
                required
                minLength={2}
                maxLength={20}
              />
            </label>
            <label>
              <span className={styles.req}>Email Address *</span>
              <input
                type="email"
                id="email"
                name="email"
                required
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                title="Please enter a valid email address"
              />
            </label>
          </div>
          <div className={styles.enquiry}>
            <label>
              <span className={styles.req}>Enquiry*</span>
              <textarea
                minLength={5}
                maxLength={600}
                id="enquiry"
                name="enquiry"
                required
              ></textarea>
            </label>
          </div>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
