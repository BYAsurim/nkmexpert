import { type FormEvent, useEffect, useId, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { landingContent } from '../../landing/content'
import { Section } from '../layout/Section'

export function Contacts() {
  const formId = useId()
  const [state, handleSubmit, reset] = useForm('xvzrvlaa')
  const formRef = useRef<HTMLFormElement | null>(null)
  const [clientErrors, setClientErrors] = useState<Partial<Record<'name' | 'company' | 'phone' | 'email', string>>>(
    {},
  )

  const handleSubmitWithValidation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const errors: Partial<Record<'name' | 'company' | 'phone' | 'email', string>> = {}

    if (!String(formData.get('name') ?? '').trim()) {
      errors.name = 'Укажите контактное лицо.'
    }
    if (!String(formData.get('company') ?? '').trim()) {
      errors.company = 'Укажите организацию.'
    }
    if (!String(formData.get('phone') ?? '').trim()) {
      errors.phone = 'Укажите телефон.'
    }
    if (!String(formData.get('email') ?? '').trim()) {
      errors.email = 'Укажите email.'
    }

    if (Object.keys(errors).length > 0) {
      setClientErrors(errors)
      return
    }

    setClientErrors({})
    await handleSubmit(event)
  }

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset()
      reset()
      setClientErrors({})
    }
  }, [reset, state.succeeded])

  return (
    <Section
      id="contacts"
      title="Контакты и заявка"
      subtitle="Связь и форма заявки. Сообщение отправляется через Formspree на указанный email."
    >
      <div className="contactGrid">
        <div className="contactCard">
          <div className="contactTitle">Контакты</div>
          <div className="contactRows">
            <div className="contactRow">
              <div className="contactKey">Телефон</div>
              <div className="contactVal">
                <a className="link" href={`tel:${landingContent.contacts.phone}`}>
                  {landingContent.contacts.phone}
                </a>
              </div>
            </div>
            <div className="contactRow">
              <div className="contactKey">Email</div>
              <div className="contactVal">
                <a className="link" href={`mailto:${landingContent.contacts.email}`}>
                  {landingContent.contacts.email}
                </a>
              </div>
            </div>
            <div className="contactRow">
              <div className="contactKey">Адрес</div>
              <div className="contactVal">{landingContent.contacts.addressNote}</div>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          className="form"
          aria-label="Форма заявки"
          onSubmit={handleSubmitWithValidation}
        >
          <div className="formHeader">
            <div className="formTitle">Заявка</div>
            <div className="formHint">
              После заполнения можно открыть письмо по кнопке «Подготовить письмо».
            </div>
          </div>

          <div className="formGrid">
            <label className={`field${clientErrors.name ? ' fieldError' : ''}`} htmlFor={`${formId}-name`}>
              <span className="fieldLabel">Контактное лицо</span>
              <input
                id={`${formId}-name`}
                className="input"
                name="name"
                autoComplete="name"
              />
              <div
                className={`fieldErrorText${
                  clientErrors.name ? ' fieldErrorTextVisible' : ''
                }`}
              >
                {clientErrors.name || '\u00A0'}
              </div>
            </label>

            <label className={`field${clientErrors.company ? ' fieldError' : ''}`} htmlFor={`${formId}-company`}>
              <span className="fieldLabel">Организация</span>
              <input
                id={`${formId}-company`}
                className="input"
                name="company"
                autoComplete="organization"
              />
              <div
                className={`fieldErrorText${
                  clientErrors.company ? ' fieldErrorTextVisible' : ''
                }`}
              >
                {clientErrors.company || '\u00A0'}
              </div>
            </label>

            <label className={`field${clientErrors.phone ? ' fieldError' : ''}`} htmlFor={`${formId}-phone`}>
              <span className="fieldLabel">Телефон</span>
              <input
                id={`${formId}-phone`}
                className="input"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
              />
              <div
                className={`fieldErrorText${
                  clientErrors.phone ? ' fieldErrorTextVisible' : ''
                }`}
              >
                {clientErrors.phone || '\u00A0'}
              </div>
            </label>

            <label className={`field${clientErrors.email ? ' fieldError' : ''}`} htmlFor={`${formId}-email`}>
              <span className="fieldLabel">Email</span>
              <input
                id={`${formId}-email`}
                className="input"
                name="email"
                autoComplete="email"
                inputMode="email"
                type="email"
              />
              <div
                className={`fieldErrorText${
                  clientErrors.email ? ' fieldErrorTextVisible' : ''
                }`}
              >
                {clientErrors.email || '\u00A0'}
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </label>

            <label className="field fieldFull" htmlFor={`${formId}-message`}>
              <span className="fieldLabel">Комментарий</span>
              <textarea
                id={`${formId}-message`}
                className="textarea"
                name="message"
                rows={5}
              />
            </label>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="formActions">
            <button type="submit" className="button buttonPrimary" disabled={state.submitting}>
              Отправить заявку
            </button>
            <button
              type="reset"
              className="button buttonGhost"
              onClick={() => {
                formRef.current?.reset()
                reset()
                setClientErrors({})
              }}
            >
              Очистить
            </button>
          </div>

          {state.succeeded && (
            <div className="formNotice" role="status">
              Заявка отправлена. Мы свяжемся с вами по указанным контактным данным.
            </div>
          )}
        </form>
      </div>
    </Section>
  )
}

