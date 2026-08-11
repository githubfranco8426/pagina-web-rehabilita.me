"use client"

import Script from "next/script"

export function DoctoraliaWidget() {
  return (
    <>
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.cl/perfil/franco-tabilo"
        rel="nofollow"
        data-zlw-doctor="franco-tabilo"
        data-zlw-type="big"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget de reserva de citas médicas"
      >
        Reserve una cita
      </a>
      <Script src="https://platform.docplanner.com/js/widget.js" strategy="lazyOnload" />
    </>
  )
}
