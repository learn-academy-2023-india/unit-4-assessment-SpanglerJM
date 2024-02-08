# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    attr_accessor :model, :wheels, :kilos_per_hour
  # this extremely mandatory piece of code called the attribute accesspr and it is a shortcut for getter adn setter mode for a class. here its generating our model, wheels and kilometers_per_hour getters and setters
    def initialize(model)
      @model = model
      @wheels = 2
      @kilos_per_hour = 0
    end
  # initialize method is called fora new instance of the class (Bikes) created and sets the inital value so our future methods know what to default to, or like the standard. and then the values are model wheels and kph
    def pedal_forrest_pedal(faster_duh)
      @kilos_per_hour += faster_duh
      @kilos_per_hour = 0 if @kilos_per_hour < 0
      @kilos_per_hour
    end
    # so our pedal_forrest_pedal method takes a speed increase i have hilariously named faster_duh, its now an argument and adds it to our kilometers per hour. it also asks if its less than zero i guess? if your spee dis less gthan zero...it will set it to kilos_per_hour which we stated on line 15 is zero so if its less than zero it will be set back to zero.

    def stomp_da_brake(u_go_slow)
      @kilos_per_hour -= u_go_slow
      @kilos_per_hour = 0 if @kilos_per_hour < 0
      @kilos_per_hour
    end
    # next is our equally funny stomp da brake method that helps us slow down by taking u_go_slow as an argument  and subtracting it from kilos_per_hour. I decided to be australian on this exercise and use kilometers. just like the pedal_forrest_pedal method it too checks the new speed and for whatever reason if it somehow becomes negative will set it back to zero. 

    def bike_tags
      'The suspect #{@model} bike allegedly has #{@wheels} wheels and is going #{@kilos_per_hour} kph.'
    end
    # the bike_tags returns a string explaining attributes of the object in one sentence, kinda like a cop would
  end

  Im sorry it took me extra time to finish, life and all that. Also hope it wasnt too annoying to read.
  - Keoni, Mahalo