import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.formContainer}>
      <h1>Get in touch!</h1>
      <form className={styles.form} id="form">
        <div className={styles.twoColumns}>
          <label>
            <span className={styles.req}>First Name *</span>
            <input type="text" id="firstName" name="firstName" required />
          </label>
          <label>
            <span className={styles.req}>Last Name *</span>
            <input type="text" id="lastName" name="lastName" required />
          </label>
        </div>
        <div className={styles.twoColumns}>
          <label>
            <span className={styles.req}>Company *</span>
            <input type="text" id="company" name="company" required />
          </label>
          <label>
            <span className={styles.req}>Email Address *</span>
            <input type="email" id="email" name="email" required />
          </label>
        </div>
        <div className={styles.enquiry}>
          <label>
            <span className={styles.req}>Enquiry*</span>
            <textarea
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
  );
}

export default Form;
