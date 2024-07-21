import React, { useState } from 'react';
import styles from './resetpassword.module.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setErrorMessage('Passwords do not match, please try again!');
      return;
    }

    setErrorMessage('');
    alert('Password reset successfully');
  };

  return (
    <div className={styles["reset-pass-body"]}>
      <div className={styles["reset-pass-page"]}>
        <div className={styles.header}>
          <h5>Password Reset</h5>
          <h1>Set a new password</h1>
        </div>

        <div className={styles["reset-form"]}>
          <form onSubmit={handleSubmit}>
            <div className={styles["reset-input"]}>
              <label>Enter new password:</label>
              <input
                className={styles["pass-input"]}
                type="password"
                name="new-password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles["reset-input"]}>
              <label>Confirm new password:</label>
              <input
                className={styles["pass-input"]}
                type="password"
                name="confirm-password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>

            {errorMessage && <p className={styles["error-message"]}>{errorMessage}</p>}

            <div className={styles["confirm-button"]}>
              <button type="submit" className={styles["confirm-btn"]}>SET PASSWORD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
