import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AlertPlugin)
public class AlertPlugin: CAPPlugin {
    @objc func present(_ call: CAPPluginCall) {
        let message = call.getString("message") ?? ""
        let alertController = UIAlertController(title: "Alert", message: message, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "Ok", style: .default))
        DispatchQueue.main.async {
          self.bridge.viewController.present(alertController, animated: true, completion: nil)
        }
    }
}
