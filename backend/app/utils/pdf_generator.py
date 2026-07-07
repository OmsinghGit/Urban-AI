from io import BytesIO

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate


class PDFGenerator:

    @staticmethod
    def generate(report: dict):

        buffer = BytesIO()

        pdf = SimpleDocTemplate(buffer)

        styles = getSampleStyleSheet()

        story = []

        story.append(
            Paragraph(
                "<b>AERIS Environmental Report</b>",
                styles["Heading1"],
            )
        )

        story.append(
            Paragraph(
                f"<b>City:</b> {report['city']}",
                styles["BodyText"],
            )
        )

        story.append(
            Paragraph(
                f"<b>AQI:</b> {report['stats'][0]['value']}",
                styles["BodyText"],
            )
        )

        story.append(
            Paragraph(
                f"<b>PM2.5:</b> {report['stats'][1]['value']}",
                styles["BodyText"],
            )
        )

        story.append(
            Paragraph(
                f"<b>Temperature:</b> {report['weather']['temperature']} °C",
                styles["BodyText"],
            )
        )

        story.append(
            Paragraph(
                f"<b>Humidity:</b> {report['weather']['humidity']} %",
                styles["BodyText"],
            )
        )

        story.append(
            Paragraph(
                f"<b>Wind:</b> {report['weather']['wind']} m/s",
                styles["BodyText"],
            )
        )

        story.append(
            Paragraph(
                "<br/><b>AI Summary</b>",
                styles["Heading2"],
            )
        )

        story.append(
            Paragraph(
                report["summary"],
                styles["BodyText"],
            )
        )

        pdf.build(story)

        buffer.seek(0)

        return buffer