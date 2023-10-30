import { Formik } from 'formik'
import styles from '@/assets/scss/login.module.scss'
import * as Yup from 'yup'
import { useAppDispatch } from '@/redux/hooks'
import { handleLoginAsync } from '@/redux/features/authSlice'
import { useRouter } from 'next/navigation'

const FormLogin = () => {
  const router = useRouter()

  const dispatch = useAppDispatch()

  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('username is required'),
          password: Yup.string().required('password is required'),
        })}
        onSubmit={(values: any) => {
          dispatch(handleLoginAsync(values))
          router.push('/admin')
        }}
      >
        {({ errors, touched, handleSubmit, handleChange }) => (
          <form noValidate className={styles.formLogin} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Username</label>
              <input
                name="username"
                className={styles.inputLogin}
                onChange={handleChange}
              />
              {errors.username && touched.username && (
                <p className={styles.validateMess}>{errors.username}</p>
              )}
            </div>
            <div className={styles.formGroup} style={{ marginTop: 20 }}>
              <label>Password</label>
              <input
                name="password"
                onChange={handleChange}
                className={styles.inputLogin}
              />
              {errors.password && touched.password && (
                <p className={styles.validateMess}>{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              style={{ marginTop: 20 }}
              className={styles.btnSubmit}
            >
              submit
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
export default FormLogin
