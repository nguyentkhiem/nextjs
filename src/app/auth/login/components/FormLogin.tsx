import { Formik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '@/redux/hooks'
import { handleLoginAsync } from '@/redux/features/authSlice'
import { useRouter } from 'next/navigation'
import styles from '@/assets/scss/login.module.scss'
import { useTranslation } from 'react-i18next'

function FormLogin() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

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
              <label>{t('username')}</label>
              <input
                name="username"
                className={styles.inputLogin}
                onChange={handleChange}
                placeholder="USERNAME / EMAIL"
              />
              {errors.username && touched.username && (
                <p className={styles.validateMess}>
                  {errors?.username?.toString()}
                </p>
              )}
            </div>
            <div className={styles.formGroup} style={{ marginTop: 20 }}>
              <label>{t('password')}</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                className={styles.inputLogin}
                placeholder="********"
              />
              {errors.password && touched.password && (
                <p className={styles.validateMess}>
                  {errors?.password?.toString()}
                </p>
              )}
            </div>
            <button
              type="submit"
              style={{ marginTop: 20 }}
              className={styles.btnSubmit}
            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
export default FormLogin
