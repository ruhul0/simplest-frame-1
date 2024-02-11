import { FrameActionDataParsed } from "frames.js";

export default (
    frameMessage: FrameActionDataParsed, 
    frameHTML: string
) => {
    const html = String.raw;
    const markup = html`
        <html>
        <head>
            <style>
                @font-face {
                    font-family: "Redaction";
                    src:
                        local("Redaction"),
                        url("/fonts/Redaction-Regular") format("woff2");
                }
                body {
                    margin: 0;
                    padding: 0;
                    font-family: "Redaction";
                    background: black;
                }
                fc-frame {
                    display: flex;
                    flex-direction: column;
                    width: 100vw;
                    height: 100vh;
                    color: white;
                    background: black;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                }
            </style>
        </head>
        <body>
            ${frameHTML}
        </body>
    </html>
    `
    
    return markup;
}