# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Event.destroy_all
Attendee.destroy_all

user = User.create(email: "test@user.com",
                    first_name: "test",
                    last_name: "user",
                    username: "testuser",
                    password: "abc123",
                    password_confirmation: "abc123")

user2 = User.create(email: "test2@user.com",
                    first_name: "test2",
                    last_name: "user",
                    username: "testuser2",
                    password: "abc123",
                    password_confirmation: "abc123")

user3 = User.create(email: "test3@user.com",
                    first_name: "test3",
                    last_name: "user",
                    username: "testuser3",
                    password: "abc123",
                    password_confirmation: "abc123")
Event.create([
    { title: "Test 1 Event",
      user: user,
      description: "Test Desc",
    },
    { title: "Test 2 Event",
      user: user,
      description: "Test Desc",
    },
    { title: "Test 3 Event",
      user: user,
      description: "Test Desc",
    },
    { title: "Test 4 Event",
      user: user,
      description: "Test Desc",
    },
    { title: "Test 5 Event",
      user: user2,
      description: "Test Desc",
    },
    { title: "Test 6 Event",
      user: user2,
      description: "Test Desc",
    },
  ])

Attendee.create(user: user2, event: Event.first)
Attendee.create(user: user3, event: Event.first)
Attendee.create(user: user, event: Event.last)
Attendee.create(user: user3, event: Event.last)
Attendee.create(user: user2, event: Event.first)
