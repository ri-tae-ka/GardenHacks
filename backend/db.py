
from sqlalchemy import Column, Double, String
from sqlalchemy.orm import create_engine, relationship, sessionmaker

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

url = 'postgresql://root@localhost:26257?sslmode=disable'
engine = create_engine(url=url)
Session = sessionmake(bind=engine)
session = Session()

class Weather(Base):
"""Holds weather data history from user search"""
	__tablename__ = 'weather'
	id = Column(Integer, primary_key=True, unique=True, nullable=False, autoincrement=True)
	feels_like = Column(Float, unique=True, nullable=False)
	temp = Column(Float, nullable=True)
	pressure = Column(Float, nullable=False)
	humidity = Column(Float, nullable=False)

	def __repr__(self):
		return f'<Specimen(id = {self.id}, species = {self.species})>'

Base.metadata.create_all(engine)

search1 = Weather(feels_like=36, temp=34, pressure=1012, humidity=40)
session.add(species1)
session.commit()
session.flush()
session.close()
