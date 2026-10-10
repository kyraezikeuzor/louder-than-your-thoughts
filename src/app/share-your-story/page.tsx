const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeVrMA4r4Tkbw5a7_TBdq_fPbJTYAuA8YmxU-ZP_16kTmQDKA/viewform";

export default function ShareYourStoryPage() {
  return (
    <main id="main">
      <section id="share">
        <div className="wrap">
          <h1>Share your story</h1>
          <p className="lede">
            With a parent or guardian&apos;s permission, I&apos;d love to feature
            your experience — anonymously if you prefer. Every submission is
            read before anything is used.
          </p>
          <p>
            <a href={formUrl} target="_blank" rel="noopener noreferrer">
              Open the form in a new tab
            </a>
          </p>
          <iframe
            src={formUrl + "?embedded=true"}
            title="Share your story — Google Form"
            width="100%"
            height="1200"
            style={{ display: "block", border: 0, maxWidth: "100%" }}
          >
            <a href={formUrl}>Open the Share your story form</a>
          </iframe>
        </div>
      </section>
    </main>
  );
}
