import docx2txt
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity 
import PyPDF2 as PyPDF2

cv=CountVectorizer() #initializing Count Vectorizer

def extract_text_from_pdf(file):
    text = ""
    pdf_reader = PyPDF2.PdfReader(file)
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()
    return text


#initializing 
def main():

    job_des_file= None

    res_file = None


    if job_des_file and res_file:
        job_des = extract_text_from_pdf(job_des_file)
        resume = extract_text_from_pdf(res_file)

        texts=[job_des, resume]

        matrix= cv.fit_transform(texts)

        tracker= cosine_similarity(matrix)[0][1]

        ats_score = round(tracker*100, 2)

        return ats_score

if __name__ == "__main__":
    main()
