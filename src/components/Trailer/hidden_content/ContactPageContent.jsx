import Word from "../../Word";

const ContactPageContent = (props) => {
  const spans = document.querySelectorAll("#root span.funky")
  const words = []

  spans.forEach((word) => {
    words.push({
      value: word.textContent,
      width: word.offsetWidth,
      height: word.offsetHeight,
    })
  })

  props.handlefunkyWidths(words)

  return (
    <div className="row max-w-full h-full px-[1.1875rem] py-4">
        <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
            WE EMBRACE THE <span className="funky">ART</span> OF THE <span className="funky">UNSEEN</span>
        </h1>
        <p className="text-[2.5rem] text-justify mb-12">
            We believe that the true <span className="funky">magic</span> of web <span className="funky">design</span> and <span className="funky">development</span> lies beneath the surface. While others may only
            see the final results, we take pride in the <span className="funky">dedication,</span> the intricate <span className="funky">process,</span> and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] text-justify">
            Our approach revolves around a commitment to understanding and constructing <span className="funky">value</span> by immersing ourselves in
            our customers&#39; <span className="funky">unique</span> needs. For us, <span className="funky">design</span> transcends mere aesthetics; it&#39;s a profound connection
            rooted in <span className="funky">empathy,</span> <span className="funky">compassion,</span> and an authentic concern for the individuals we serve.
        </p>
    </div>
  );
}

export default ContactPageContent;