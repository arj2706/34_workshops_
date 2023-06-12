import React from 'react';

function RegistrationForm({ handleSubmit, handleChange, values, errors, touched }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={touched.name && errors.name ? 'error' : ''}
        />
        {touched.name && errors.name && <div className="error-message">{errors.name}</div>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
          className={touched.age && errors.age ? 'error' : ''}
        />
        {touched.age && errors.age && <div className="error-message">{errors.age}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={touched.email && errors.email ? 'error' : ''}
        />
        {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={touched.password && errors.password ? 'error' : ''}
        />
        {touched.password && errors.password && <div className="error-message">{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
