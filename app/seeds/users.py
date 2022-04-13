from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='sifuhotman', profilePic='https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg', password='123321')
    marnie = User(
        username='marnie', profilePic='https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg', password='password')
    bobbie = User(
        username='bobbie',profilePic='https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
