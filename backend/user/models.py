import datetime
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import DateTime, TIMESTAMP
from .database import Base

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    email = Column(String)
    password = Column(String)
    date_of_birth = Column(String)
    minimum_age_pref = Column(String)
    maximum_age_pref = Column(String)
    location = Column(String)
    messages = relationship("Message", back_populates='owner')
    
class Message(Base):
    __tablename__ = 'messages'
    
    id = Column(Integer, primary_key=True, index=True)
    message = Column(String)
    send_at = Column(DateTime, default=datetime.datetime.utcnow)
    
    owner = relationship('User', back_populates='messages')