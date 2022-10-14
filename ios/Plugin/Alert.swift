import Foundation

@objc public class Alert: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
