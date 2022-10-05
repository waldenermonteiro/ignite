defmodule ReportsGeneratorTest do
  use ExUnit.Case

  describe "build/1" do
    test "builds the report" do
      # Setup

      file_name = "report_test.csv"

      # Exercise

      response = ReportsGenerator.build(file_name)

      # Assert

      expected_response = %{
        "foods" => %{
          "açaí" => 1,
          "churrasco" => 2,
          "esfirra" => 3,
          "hambúrguer" => 2,
          "pastel" => 0,
          "pizza" => 2,
          "prato_feito" => 0,
          "sushi" => 0
        },
        "users" => %{
          "1" => 48,
          "10" => 36,
          "11" => 0,
          "12" => 0,
          "13" => 0,
          "14" => 0,
          "15" => 0,
          "16" => 0,
          "17" => 0,
          "18" => 0,
          "19" => 0,
          "2" => 45,
          "20" => 0,
          "21" => 0,
          "22" => 0,
          "23" => 0,
          "24" => 0,
          "25" => 0,
          "26" => 0,
          "27" => 0,
          "28" => 0,
          "29" => 0,
          "3" => 31,
          "30" => 0,
          "4" => 42,
          "5" => 49,
          "6" => 18,
          "7" => 27,
          "8" => 25,
          "9" => 24
        }
      }

      assert response == expected_response
    end
  end

  describe "fetch_higher_cost/2" do
    test "When the options is 'users', returns the user who spent the most" do
      # Setup

      file_name = "report_test.csv"

      # Exercise

      response =
        file_name
        |> ReportsGenerator.build()
        |> ReportsGenerator.fetch_higher_cost("users")

      # Assert

      expected_response = {"5", 49}
      assert response == expected_response
    end

    test "When the options is 'foods', returns the most consuemr food" do
      # Setup

      file_name = "report_test.csv"

      # Exercise

      response =
        file_name
        |> ReportsGenerator.build()
        |> ReportsGenerator.fetch_higher_cost("foods")

      # Assert

      expected_response = {"esfirra", 3}
      assert response == expected_response
    end

    test "When the invalid option is given, return an error" do
      # Setup

      file_name = "report_test.csv"

      # Exercise

      response =
        file_name
        |> ReportsGenerator.build()
        |> ReportsGenerator.fetch_higher_cost("invalid_option")

      # Assert

      expected_response = {:error, "Invalid option!"}
      assert response == expected_response
    end
  end
end