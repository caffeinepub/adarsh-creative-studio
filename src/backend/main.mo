import Map "mo:core/Map";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type ContactSubmission = {
    timestamp : Time.Time;
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let submissions = Map.empty<Text, ContactSubmission>();
  var nextId = 0;

  public shared ({ caller }) func submit(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      timestamp = Time.now();
      name;
      email;
      message;
    };
    submissions.add(nextId.toText(), submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (caller.toText() != "2vxsx-fae") {
      Runtime.trap("Only admin can access this.");
    };

    submissions.values().toArray().sort();
  };
};
