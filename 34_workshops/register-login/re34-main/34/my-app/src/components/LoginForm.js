import React from 'react';

function LoginForm({ handleSubmit, handleChange, values, errors, touched }) {
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
