# This code is contributed by Avinash Prasad
#Python code for sentential tokenization
import pandas as pd
import numpy as np
import nltk
import re
import matplotlib.pyplot as plt
import seaborn as sns
from nltk.tokenize import word_tokenize
from nltk.tokenize import TweetTokenizer, sent_tokenize
import warnings
from nltk.tokenize import RegexpTokenizer
from nltk.stem.porter import PorterStemmer
warnings.filterwarnings("ignore", category=DeprecationWarning)
import string
import gensim
from gensim.models import word2vec
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
# Read file 
tweet_data = pd.read_csv('CSV file to be tokenized')

#Preprocessing data:
processed_tweet = tweet_data
#Removing all special characters and punctuation marks from the tweets....
processed_tweet['step1'] = processed_tweet['tweet'].apply(lambda x: remove_punct(x))

#Removing the stopwords....
stop = stopwords.words("English")
processed_tweet['step2'] = processed_tweet['step1'].apply(lambda x: ' '.join([word for word in x.split() if word not in (stop)]))

#Stemming the tweets to thier root form....
ps = PorterStemmer()
processed_tweet['step3'] = processed_tweet['step2'].apply(lambda x: ' '.join([ps.stem(word) for word in x.split()]))

#Lemmatizing the tweets....
lmtzr = WordNetLemmatizer()
processed_tweet['step4'] = processed_tweet['step3'].apply(lambda x: ' '.join([lmtzr.lemmatize(word,'v') for word in x.split() ]))

#Converting all terms to lowercase and removing special characters....
processed_tweet['step5'] = processed_tweet['step4'].apply(lambda x: ' '.join([word.lower() for word in x.split()]))

#Replacing extra spaces with a single space....
processed_tweet['filtered_tweet'] = processed_tweet['step5'].apply(lambda x: re.sub('  ', ' ', x))
print(processed_tweet)
