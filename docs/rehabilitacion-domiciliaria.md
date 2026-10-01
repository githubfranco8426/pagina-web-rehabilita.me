# Rehabilitación domiciliaria — implementación

## Contenido y rutas

La Home prioriza rehabilitación a domicilio en Iquique y Alto Hospicio. Los servicios históricos siguen disponibles. Las landings están definidas en `lib/rehabilitation.ts` y se renderizan con `app/[service]/page.tsx`:

- `/rehabilitacion-domiciliaria`
- `/rehabilitacion-post-hospitalizacion`
- `/rehabilitacion-neurologica-domicilio`
- `/kinesiologia-respiratoria-domicilio`
- `/rehabilitacion-funcional-domicilio`
- `/fonoaudiologia-neuro-adultos`

El hub `/recursos` incluye dos guías para familias. Su contenido está centralizado en `lib/resources.ts`. Las nuevas rutas tienen canonical y metadata individuales y se incluyen automáticamente en el sitemap.

## Contacto y medición

`ContextualCta` reutiliza la agenda y el WhatsApp de consultas de `lib/brand.ts`. Los eventos `whatsapp_click` y `agendar_click` incluyen `source`, `service` cuando corresponde y `page_path`. No incluyen mensajes escritos por el usuario, nombre, teléfono ni antecedentes clínicos. El selector utiliza `service_path_selected`; los acordeones de las landings envían identificadores de FAQ.

La carga de GA4 sigue dependiendo de `NEXT_PUBLIC_GA_ID`. La integración no mide reservas confirmadas: ese evento debe implementarse en la app de agenda. La URL de agenda se controla con `NEXT_PUBLIC_BOOKING_APP_URL`; debe apuntar al dominio publicado en producción.

## Terapia Ocupacional

El equipo actual publicado es Kinesiología + Fonoaudiología. La necesidad de Terapia Ocupacional se explica como una coordinación que debe evaluarse. Para anunciar el servicio como propio y habilitar reserva directa, confirmar profesional, disponibilidad y servicio en la app de agenda.

## Validación

- Build de producción y TypeScript comprobados.
- Home revisada a 320, 375, 768, 1024 y 1440 px; corregido desbordamiento del mapa previo.
- Selector de necesidad y acordeón de landing comprobados en navegador.
- Rutas comprobadas con respuesta 200, un H1 por página y canonical específico.
- Sitemap y respuesta 404 para rutas desconocidas comprobados.

## Trabajo externo pendiente

Actualizar Google Business Profile y publicar el calendario de Instagram son acciones separadas de esta implementación web. Validar las conversiones en GA4/Ads y Search Console con sus accesos respectivos. Las guías generales incluyen referencias clínicas; el responsable clínico puede ajustar los textos en los archivos de contenido centralizados.
