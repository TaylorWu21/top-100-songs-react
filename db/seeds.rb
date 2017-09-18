# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rank = 1
100.times do 
  Song.create(
    title: Faker::Beer.name, 
    artist: Faker::HarryPotter.character, 
    genre: Faker::Hacker.abbreviation,
    rank: rank
  )
  rank += 1
end
