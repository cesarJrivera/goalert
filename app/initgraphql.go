package app

import (
	"context"

	"github.com/target/goalert/graphql2/graphqlapp"
)

func (app *App) initGraphQL(ctx context.Context) error {
	app.graphql2 = &graphqlapp.App{
		DB:                  app.db,
		AuthBasicStore:      app.AuthBasicStore,
		UserStore:           app.UserStore,
		CMStore:             app.ContactMethodStore,
		NRStore:             app.NotificationRuleStore,
		NCStore:             app.NCStore,
		AlertStore:          app.AlertStore,
		AlertLogStore:       app.AlertLogStore,
		ServiceStore:        app.ServiceStore,
		FavoriteStore:       app.FavoriteStore,
		PolicyStore:         app.EscalationStore,
		ScheduleStore:       app.ScheduleStore,
		CalSubStore:         app.CalSubStore,
		RotationStore:       app.RotationStore,
		OnCallStore:         app.OnCallStore,
		TimeZoneStore:       app.TimeZoneStore,
		IntKeyStore:         app.IntegrationKeyStore,
		LabelStore:          app.LabelStore,
		RuleStore:           app.ScheduleRuleStore,
		OverrideStore:       app.OverrideStore,
		ConfigStore:         app.ConfigStore,
		LimitStore:          app.LimitStore,
		NotificationStore:   app.NotificationStore,
		SlackStore:          app.slackChan,
		HeartbeatStore:      app.HeartbeatStore,
		NoticeStore:         *app.NoticeStore,
		Twilio:              app.twilioConfig,
		AuthHandler:         app.AuthHandler,
		FormatDestFunc:      app.notificationManager.FormatDestValue,
		NotificationManager: *app.notificationManager,
		SWO:                 app.cfg.SWO,
	}

	return nil
}
