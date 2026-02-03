import Image from 'next/image'
import { ButtonLink } from '@/components/elements/button'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'

export default function Page() {
  return (
    <>
      {/* Hero - Becoming a Beekeeper */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Imker werden"
        subheadline={
          <>
            <p>
              Dem Bienenzuchtverein Massenhausen ist es ein wichtiges Anliegen, dass Bienen
              verantwortungsvoll und fachlich fundiert gehalten werden. Deshalb bieten wir 
              einen Anfängerkurs für Neu- und Jungimker an, der einen praxisnahen und soliden 
              Einstieg in die Imkerei ermöglicht.
            </p>
            <p>
              Der Imker-Neulingskurs umfasst 7 Termine und startet am 27. März 2026. Er
              richtet sich an alle Interessierten ohne Vorkenntnisse, die sich ernsthaft
              mit dem Thema Bienenhaltung beschäftigen möchten.
            </p>
            <p>
              Ergänzend dazu steht eine begrenzte Anzahl an Plätzen für das Imkern auf Probe
              zur Verfügung. Der Probeimkerkurs beginnt am 9. Mai 2026 und bietet die Möglichkeit,
              aktiv mitzuarbeiten und den Umgang mit Bienen in der Praxis kennenzulernen.
            </p>
            <p>
              Sie möchten in die Imkerei einsteigen oder sind noch unsicher, ob die Bienenhaltung
              das passende Hobby für Sie ist?
              Beim Imkern auf Probe lernen Sie die Imkerei realistisch und ohne Verpflichtung
              kennen – von der Arbeit am Volk bis zur Honigernte.
            </p>
            <p>
              Wenn Sie Freude an Natur, Nachhaltigkeit und handwerklicher Tätigkeit haben, ist das
              Probeimkern im Bienenzuchtverein Massenhausen ein idealer Weg, um herauszufinden, ob
              die Imkerei zu Ihnen passt.
            </p>

          </>
        }
        photo={
          <Image
            src="/probeimkern.png"
            alt="Probeimkern im Bienenzuchtverein Massenhausen"
            width={1800}
            height={945}
            className="w-full h-auto"
          />
        }
      />

      {/* CTA - Registration */}
      <CallToActionSimple
        id="call-to-action"
        headline="Interesse am Probeimkern?"
        subheadline={
          <>
            <p>
              Als Probeimker erhalten Sie gegen eine Materialpauschale ein Bienenvolk zur eigenen
              Betreuung. Dabei hilft Ihnen Ihr Imkerpate, ein erfahrener Imker, den Sie über die
              Bienensaison an Ihre Seite gestellt bekommen.
            </p>
            <p>
              Nach der Saison können Sie sich entscheiden, ob Sie Spaß an der Bienenhaltung und
              Imkerei haben und weitermachen möchten.
            </p>
            <p className="font-medium">
              Also: schnuppern Sie rein und lassen Sie sich von den Bienen und ihrem Honig verzaubern!
            </p>
          </>
        }
        cta={
          <div className="flex items-center gap-4">
          <ButtonLink href="mailto:kursanmeldung@bienenzuchtverein-massenhausen.de" size="lg">
            Jetzt registrieren
          </ButtonLink>
          </div>
        }
      />
    </>
  )
}
