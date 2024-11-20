from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'Users'
    user_id = db.Column(db.Integer, primary_Key= True)
    username = db.Column(db.String(50), nulltable=False)
    email = db.Column(db.String(50), nulltable=False)
    password_hash = db.Column(db.Text, nulltable=False)
    create_at = db.Column(db.DateTime, server_default=db.func.now())

class Transaction(db.Model):
    __tablename__ = 'Transactions'
    transaction_id = db.Column(db.Integer, primary_Key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nulltable=False)
    type = db.Column(db.Enum('deposit', 'withdraw', 'service', name='transaction_type'), nulltable=False)
    amount = db.Column(db.Numeric(10, 2), nulltable=False)
    description = db.Column(db.Text)
    created_at = db.Column(db.Datatime, server_default=db.func.now())

class Service(db.Model):
    __tablename__= 'Services'
    service_id = db.Column(db.Integer, primary_Key=True)
    name = db.Column(db.String(50), nulltable=False)
    description = db.Column(db.Text)
    cost = db.Column(db.Numeric(10, 2), nulltable=False)
    created_at = db.Column(db.Datatime, server_defatult=db.func.now())

class Log(db.Model):
    __tablename__= 'Logs'
    log_id = db.Column(db.Integer, primary_Key=True)
    table_name = db.Column(db.String(50), nulltable=False)
    operation = db.Column(db.Enum('INSERT', 'UPDATE', 'DELETE', name='log_operation'), nulltable=False)
    details = db.Column(db.Text)
    timestamp = db.Column(db.Datatime, server_defatult=db.func.now())

class ServiceTransaction(db.Model):
    __tablename__='ServiceTransactions'
    service_transaction_id = db.Column(db.Integer, primary_Key=True)
    transaction_id = db.Column(db.Integer, db.ForeignKey('Trasactions.transaction_id'), nulltable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('Services.service_id'), nulltable=False)