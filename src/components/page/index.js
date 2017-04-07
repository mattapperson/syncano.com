import FontAwesome from './styles/font-awesome'
import Normalize from './styles/normalize'
import Modal from '../modal'
import SignUpForm from '../auth/signup'
import SignInForm from '../auth/signin'

export default ({children}) => (
  <div>
    {children}

    <FontAwesome />
    <Normalize />

    <Modal
      name='signup'
      title='Sign up and start building'
      subtitle='Build serverless apps on Syncano for free. Set up your backend in minutes!'
      >
      <SignUpForm />
    </Modal>

    <Modal
      name='signin'
      title='Welcom back'
      subtitle='Build serverless apps on Syncano for free. Set up your backend in minutes!'
      >
      <SignInForm />
    </Modal>

    <style jsx global>{`
      body,
      h1, h2, h3, h4, h5, h6,
      blockquote, p, pre,
      dl, dd, ol, ul,
      figure,
      hr,
      fieldset, legend {
        margin:  0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        line-height: 1.25;
      }

      html {
        font-family: Roboto;
      }

      .AppContainer {
        overflow: hidden;
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      /* = WRAPPER
       * ==================================================================== */
      .u-wrapper {
        padding-left: 30px;
        padding-right: 30px;
        margin-left: auto;
        margin-right: auto;
      }

      /* = HEADINGS
       * ==================================================================== */
      .u-title {
        color: #0b0f15;
        font-weight: 300;
        font-size: 28px;
        line-height: 36px;
      }

      .u-title + .u-subtitle {
        margin-top: 15px;
      }

      @media screen and (min-width: 560px) {
        .u-title {
          font-size: 48px;
          line-height: 48px;
        }
      }

      .u-subtitle {
        color: #7a7f87;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
      }

      @media screen and (min-width: 560px) {
        .u-subtitle {
          font-size: 24px;
        }
      }

      /* = TEXT-ALIGN
       * ==================================================================== */
      .u-ta-c {
        text-align: center;
      }

      .u-ta-r {
        text-align: right;
      }
    `}</style>
  </div>
)
